// throw "Fout";

const message = new Error("Er ging iets mis!");
// throw message;

try {
    console.log("We voeren code uit!");
    // Real-life - zelden gaan we zelf een error throwen, dit komt meestal uit een library 
    // Bijvoorbeeld: item in databank bestaat niet
    throw new Error("Item in databank bestaat niet!");
} catch (error) {
    console.log("Hier geraken we wanneer er iets mis gaat!", error, error.message);
} finally {
    console.log("Code die sowieso uitgevoerd moet worden. Maakt niet uit of er iets mis is gegaan of niet");
}