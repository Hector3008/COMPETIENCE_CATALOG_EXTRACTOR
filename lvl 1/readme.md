here we have the lvl 1 program: 

DESCRIPTION:

  this program gave us an .txt document with all competience data.

  this consists of a principal script (dataDownloader.js) which we put on the principal html document of competience catalog webpage.

  This script, receive information from dataFormater.js extracts data from data.js.
  And data.js extracts information from an script MAXExtractor.js which we put manually on every page from catalog.

OBJECTS:

  1) MAXExtractor.js just download information as "category" and "description". So we have to upgrade this with a feature: It has to extract also pictures. 
  2) MAXExtractor.js also should get every product page on catalog. It means, where it show us more specific information as description of voltage, amperage, brand and pictures.
  3) MAXExtractor also should to traver every single page of catalog. It means, the set of 89 pages it has.
  4) MAXExtractor also should gave us an .xlsx document where we'll have a new catalog with every single product with its title, description, specifications and pictures.
