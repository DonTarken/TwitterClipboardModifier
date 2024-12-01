async function modifyClipboardText() {
  try {
    // Lire le contenu actuel du presse-papiers
    const clipboardText = await navigator.clipboard.readText();

    // Vérifie si le contenu contient un lien "x.com"
    if (clipboardText.includes("x.com")) {
      const modifiedText = clipboardText.replace(/x\.com/g, "vxtwitter.com");

      // Écrit le contenu modifié dans le presse-papiers
      await navigator.clipboard.writeText(modifiedText);
      console.log("Lien modifié :", modifiedText);
    }
  } catch (error) {
    console.error("Erreur lors de la modification du presse-papiers :", error);
  }
}

// Écouteur pour l'événement `copy`
document.addEventListener("copy", async () => {
  await modifyClipboardText();
});

// Tente de modifier le contenu du presse-papiers à intervalles réguliers
setInterval(async () => {
  await modifyClipboardText();
}, 1000); // Vérifie toutes les secondes
