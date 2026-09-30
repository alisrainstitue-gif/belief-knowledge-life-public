(()=> {
  const endpoint = "https://subscribe.bkljournal.org";
  const storagePrefix = "bkl:reaction:";
  const sections = document.querySelectorAll("[data-reader-feedback]");
  if (!sections.length) return;

  const post = async (path, body) => {
    const response = await fetch(endpoint + path, {
      method: "POST",
      headers: {"Content-Type":"application/json","Accept":"application/json"},
      body: JSON.stringify(body)
    });
    let data = {};
    try { data = await response.json(); } catch (_) {}
    if (!response.ok || !data.ok) throw new Error("request-failed");
    return data;
  };

  for (const section of sections) {
    const articleKey = section.dataset.articleKey;
    const reactionButtons = section.querySelectorAll("[data-reaction]");
    const reactionStatus = section.querySelector("[data-reaction-status]");
    const commentForm = section.querySelector("[data-comment-form]");
    const commentStatus = section.querySelector("[data-comment-status]");
    const submitButton = commentForm?.querySelector('button[type="submit"]');
    const storedKey = storagePrefix + articleKey;

    let storedReaction = null;
    try { storedReaction = localStorage.getItem(storedKey); } catch (_) {}

    if (storedReaction) {
      for (const button of reactionButtons) {
        if (button.dataset.reaction === storedReaction) button.classList.add("is-selected");
        button.disabled = true;
      }
    }

    for (const button of reactionButtons) {
      button.addEventListener("click", async () => {
        if (button.disabled) return;
        for (const b of reactionButtons) b.disabled = true;
        reactionStatus.textContent = "";
        reactionStatus.classList.remove("is-error");
        try {
          await post("/reaction", {
            article_key: articleKey,
            reaction: button.dataset.reaction,
            website: ""
          });
          button.classList.add("is-selected");
          reactionStatus.textContent = "✓";
          try { localStorage.setItem(storedKey, button.dataset.reaction); } catch (_) {}
        } catch (_) {
          for (const b of reactionButtons) b.disabled = false;
          reactionStatus.textContent = "×";
          reactionStatus.classList.add("is-error");
        }
      });
    }

    commentForm?.addEventListener("submit", async event => {
      event.preventDefault();
      if (!commentForm.reportValidity()) return;
      submitButton.disabled = true;
      commentStatus.textContent = "";
      commentStatus.classList.remove("is-error");
      const form = new FormData(commentForm);
      try {
        await post("/comment", {
          article_key: articleKey,
          comment: String(form.get("comment") || ""),
          website: String(form.get("website") || "")
        });
        commentForm.reset();
        commentStatus.textContent = "✓";
      } catch (_) {
        commentStatus.textContent = "×";
        commentStatus.classList.add("is-error");
      } finally {
        submitButton.disabled = false;
      }
    });
  }
})();