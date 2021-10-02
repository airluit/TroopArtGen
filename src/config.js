const { MODE } = require("./blendMode.js");
const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "ipfs://QmUkTCG16MA1aXu4X9r2xgtL3TdWui2rhdPMYAUHb1aZE5"; //change here

const layerConfigurations = [
  {
     /*
     growEditionSizeTo: 80,
     layersOrder: [
      { name: "BACKGROUNDS" },
      { name: "FURS" },
      { name: "MOUTHS" },
      { name: "EYES"},
      { name: "HORNS" },
      
     
    ], */
    growEditionSizeTo: 22,
    layersOrder: [
      { name: "BACKGROUNDS" },
      { name: "FURS" },
      { name: "CLOTHING" },
      { name: "MOUTHS" },
      { name: "FACE TRAITS" },
      { name: "EYES"},
      { name: "PIERCINGS" },
      { name: "EYEWEAR"},
      { name: "HORNS" },
      { name: "HEADWEAR" }

    ],
  },
];

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
