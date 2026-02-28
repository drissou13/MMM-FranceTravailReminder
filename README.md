# MMM-FranceTravailReminder
# MMM-FranceTravailReminder

Un module MagicMirror² qui vous rappelle d'actualiser votre situation **France Travail** (ex-Pôle emploi) :

- ⏰ Affichage 2 minutes par jour  
- 🎲 Heure aléatoire chaque jour (configurable)  
- 📅 Affiche uniquement entre le 28 et le 15 du mois  
- ✨ Animation fade in / fade out  
- 🟦 Logo France Travail inclus  

---

## 📦 Installation

Depuis le Raspberry Pi avec Git :

```bash
cd ~/MagicMirror/modules
git clone https://github.com/drissou13/MMM-FranceTravailReminder.git

Ajouter le module dans config/config.js :

{
    module: "MMM-FranceTravailReminder",
    position: "top_center",
    config: {
        earliestHour: 8,
        latestHour: 20
    }
}

Redémarrer MagicMirror :

pm2 restart mm
# ou
npm start
