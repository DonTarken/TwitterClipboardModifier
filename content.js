document.addEventListener("copy", async (event) => {
    try {
      // Lire le contenu copié
      const clipboardText = await navigator.clipboard.readText();
  
      // Vérifie si le contenu copié contient un lien "x.com"
      if (clipboardText.includes("x.com")) {
        const modifiedText = clipboardText.replace(/x\.com/g, "vxtwitter.com");
  
        // Écrit le contenu modifié dans le presse-papiers
        await navigator.clipboard.writeText(modifiedText);
        console.log("Lien modifié :", modifiedText);
      }
    } catch (error) {
      console.error("Erreur lors de la modification du presse-papiers :", error);
    }
  });