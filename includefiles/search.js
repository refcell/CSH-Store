var searchproducts = [
  ["four click pen", "4click.html"],
  ["altoids candy food", "altoids.html"],
  ["funny soft fluffy bunny betty eddie pen pens", "bettyediepen.html"],
  ["composition notebook notepad paper book", "blackcomposition.html"],
  ["binder binders", "bluebinder.html"],
  ["composition notebook notepad paper book", "bluecomposition.html"],
  ["folder folders", "bluefolder.html"],
  ["csh custom apparel spirit jersey shirt clothing", "bluespirit.html"],
  ["earbuds earbud ear bud buds music", "boxearbuds.html"],
  ["breast cancer pen", "breastcancerpen.html"],
  ["bumper car stickers sticker", "bumperstickers.html"],
  ["holiday christmas gel pen pens", "christmasgelpen.html"],
  ["holiday christmas santa pen pens", "christmassanta.html"],
  ["folder folders", "clearfolder.html"],
  ["colored pencils pencil", "coloredpencils.html"],
  ["compass tool tools", "compass.html"],
  ["csh custom apparel hat hats", "cshhat.html"],
  ["csh custom apparel shirt shirts", "cshshirtblue.html"],
  ["csh custom apparel shirt shirts", "cshshirtwhite.html"],
  ["daisy flower flowers daisies pen pens", "daisypen.html"],
  ["earbud earbuds ear bud buds music", "earbud.html"],
  ["eos lipbaum lipgloss lip baum gloss", "eos.html"],
  ["csh custom apparel shoes shoe flip flop flops", "flipflops.html"],
  ["funny bunnies bunny pen pens", "funnybunniespen.html"],
  ["sharpie hilighter hi lighter highlighter pen pens", "hilighter.html"],
  ["hole puncher punchers", "holepuncher.html"],
  ["hoppy spring pen pens animal animals pencil pencils bunny sheep butterfly frog chicken chick ladybug lady bug", "hoppyspringpen.html"],
  ["index cards card paper papers", "indexcards.html"],
  ["csh custom apparel lanyard key chain keychain", "lanyard.html"],
  ["csh custom items license plate plates", "licenseplate.html"],
  ["loose leaf looseleaf paper", "looseleaf.html"],
  ["mechanical pencils pencil", "mechanicalpencils.html"],
  ["mini stapler ministapler", "ministapler.html"],
  ["binder binders", "redbinder.html"],
  ["composition notebook notepad paper book", "redcomposition.html"],
  ["csh custom apparel spirit jersey shirt clothing", "redspirit.html"],
  ["rudolph raindeer pen pens", "rudolphpen.html"],
  ["scary springer halloween ghost pen pens", "scaryspringerpen.html"],
  ["csh custom seahawks pencil pencils", "seahawkspencils.html"],
  ["sharpie marker sharpies markers", "sharpie.html"],
  ["fluffy bird pen pens snowbird ski skiing", "snowbird.html"],
  ["snow man snowman pen pens", "snowmanpen.html"],
  ["stylus pen pens", "stylus.html"],
  ["binder divider dividers tab tabdividers tabdivider", "tabdividers.html"],
  ["holiday christmas santa bird pen pens", "tinselpen.html"],
  ["trident gum pack", "trident.html"],
  ["usb thumb drive", "usb.html"]
];
function search()
{
  window.location.href = 'search.html';
  console.log("1");
  var b = document.getElementById('tftextinput').value;
    var words = b.split(" ");
      for (var i = 0; i < words.length - 1; i++) {
        console.log("2");
        for (var x = 0; x < searchproducts.length; x++) { 
          console.log("3");
          var rowwords = searchproducts[x][0].split(" ");
          for(var y = 0; y < rowwords.length; y++) {
            console.log("4");
            if(rowwords[x].localeCompare(words[i]) == 0) {
              console.log("5");
              $("search").html(searchproducts[x][1]);
            }
          }
        }
      }
};
