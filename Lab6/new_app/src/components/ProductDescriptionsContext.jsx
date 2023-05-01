import { createContext } from 'react';

const productDescriptions = {
  1: `Напій Monster Energy Super Fuel Watermelon 500 ml
      Обсяг (л): 0.5
      Упаковка: Метал`,
  2: `Is Discontinued By Manufacturer : No
      Package Dimensions : 5.08 x 4.29 x 1.1 inches; 1 Ounces
      UPC : 018804002564
      Manufacturer : Canel's
      ASIN : B076DNFBMQ
      
      ngredients
      'SUGAR, GUM BASE, CORN SYRUP, DEXTROSE, ARABIC GUM, NATURAL AND ARTIFICIAL FLAVORS, SORBITOL, GLYCERIN, TITANIUM DIOXIDE, SOYBEAN LECITHIN, CONFECTIONERS GLAZE, POLISHING WAX, ARTIFICIAL SWEETENERS (ACESULFAME-K, ASPARTAME), MALIC ACID, ARTIFICIAL COLORS (INCLUDES F. D. & C. RED 40, YELLOW 5, RED 3 AND BLUE 1), AND BHT (TO MAINTAIN FRESHNESS).'
      
      Legal Disclaimer
      Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.`,
  3: `This is a description of product 3`,
  4: `This is a description of product 4`,
  5: `This is a description of product 5`,
  6: `This is a description of product 6`,
};

export const ProductDescriptionsContext = createContext(productDescriptions);