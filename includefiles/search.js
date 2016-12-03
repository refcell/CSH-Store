$.get("search.html");
var searchproducts = [
  ["four click pen", "products/4click.html"],
  ["altoids candy food", "products/altoids.html"],
  ["funny soft fluffy bunny betty eddie pen pens", "products/bettyediepen.html"],
  ["composition notebook notepad paper book", "products/blackcomposition.html"],
  ["binder binders", "products/bluebinder.html"],
  ["composition notebook notepad paper book", "products/bluecomposition.html"],
  ["folder folders", "products/bluefolder.html"],
  ["csh custom apparel spirit jersey shirt clothing", "products/bluespirit.html"],
  ["earbuds earbud ear bud buds music", "products/boxearbuds.html"],
  ["breast cancer pen", "products/breastcancerpen.html"],
  ["bumper car stickers sticker", "products/bumperstickers.html"],
  ["holiday christmas gel pen pens", "products/christmasgelpen.html"],
  ["holiday christmas santa pen pens", "products/christmassanta.html"],
  ["folder folders", "products/clearfolder.html"],
  ["colored pencils pencil", "products/coloredpencils.html"],
  ["compass tool tools", "products/compass.html"],
  ["csh custom apparel hat hats", "products/cshhat.html"],
  ["csh custom apparel shirt shirts", "products/cshshirtblue.html"],
  ["csh custom apparel shirt shirts", "products/cshshirtwhite.html"],
  ["daisy flower flowers daisies pen pens", "products/daisypen.html"],
  ["earbud earbuds ear bud buds music", "products/earbud.html"],
  ["eos lipbaum lipgloss lip baum gloss", "products/eos.html"],
  ["csh custom apparel shoes shoe flip flop flops", "products/flipflops.html"],
  ["funny bunnies bunny pen pens", "products/funnybunniespen.html"],
  ["sharpie hilighter hi lighter highlighter pen pens", "products/hilighter.html"],
  ["hole puncher punchers", "products/holepuncher.html"],
  ["hoppy spring pen pens animal animals pencil pencils bunny sheep butterfly frog chicken chick ladybug lady bug", "products/hoppyspringpen.html"],
  ["index cards card paper papers", "products/indexcards.html"],
  ["csh custom apparel lanyard key chain keychain", "products/lanyard.html"],
  ["csh custom items license plate plates", "products/licenseplate.html"],
  ["loose leaf looseleaf paper", "products/looseleaf.html"],
  ["mechanical pencils pencil", "products/mechanicalpencils.html"],
  ["mini stapler ministapler", "products/ministapler.html"],
  ["binder binders", "products/redbinder.html"],
  ["composition notebook notepad paper book", "products/redcomposition.html"],
  ["csh custom apparel spirit jersey shirt clothing", "products/redspirit.html"],
  ["rudolph raindeer pen pens", "products/rudolphpen.html"],
  ["scary springer halloween ghost pen pens", "products/scaryspringerpen.html"],
  ["csh custom seahawks pencil pencils", "products/seahawkspencils.html"],
  ["sharpie marker sharpies markers", "products/sharpie.html"],
  ["fluffy bird pen pens snowbird ski skiing", "products/snowbird.html"],
  ["snow man snowman pen pens", "products/snowmanpen.html"],
  ["stylus pen pens", "products/stylus.html"],
  ["binder divider dividers tab tabdividers tabdivider", "products/tabdividers.html"],
  ["holiday christmas santa bird pen pens", "products/tinselpen.html"],
  ["trident gum pack", "products/trident.html"],
  ["usb thumb drive", "products/usb.html"]
];
function search()
{
  console.log("1");
  var b = document.getElementById('tftextinput').value;
  var words = b.split(" ");
  for (var i = 0; i < words.length; i++) {
    console.log("2");
    for (var x = 0; x < searchproducts.length; x++) { 
      console.log("3");
      var rowwords = searchproducts[x][0].split(" ");
      for(var y = 0; y < rowwords.length; y++) {
        console.log("4");
        if(rowwords[y] == words[i]) {
          console.log("5");
          console.log(searchproducts[x][1]);
          console.log(searchproducts[x][0]);
          $(".search").html(searchproducts[x][1]);
          var e = document.getElementById('.search');
          e.appendChild("<html-include src=" + searchproducts[x][1] + "></html-include>");
          e.insertAdjacentHTML(beforeend, "<html-include src=" + searchproducts[x][1] + "></html-include>");
        }
      }
    }
  }
  window.location.href = 'search.html';
};
