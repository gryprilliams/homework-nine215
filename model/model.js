var homeContent = `<section class="hero1">
<h1>LOREM</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum amet et nemo quis atque esse vel quisquam hic. Officia, ratione.</p>
</section>
<section class="extraparagraphs">
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat nihil dolor ipsa voluptatem consequatur repellendus, recusandae laudantium. Officiis minima, soluta natus officia unde voluptatibus inventore sint doloremque tenetur nulla culpa maxime corporis necessitatibus delectus vero ducimus tempora ipsa placeat eveniet earum eum sapiente dicta rerum? Officia ipsum incidunt debitis!</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, doloremque ipsam architecto rem dicta sequi commodi molestiae itaque doloribus odit rerum iure minus eius et delectus sit porro totam explicabo vel necessitatibus dolorum aspernatur. Nam, ipsum ad.</p>
</section>
<section class="profiles">
<div class="container">
<img src="images/gorillas.webp" alt="Selfie with Gorillas">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, corporis.</p>
</div>
<div class="container">
<img src="images/curdledmilk.png" alt="Curdled Milk">
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, repellendus!</p>
</div>
</section>`;
var aboutContent =  `<section class="hero2">
<h1>LOREM</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum amet et nemo quis atque esse vel quisquam hic. Officia, ratione.</p>
</section>
<section class="extraparagraphs">
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat nihil dolor ipsa voluptatem consequatur repellendus, recusandae laudantium. Officiis minima, soluta natus officia unde voluptatibus inventore sint doloremque tenetur nulla culpa maxime corporis necessitatibus delectus vero ducimus tempora ipsa placeat eveniet earum eum sapiente dicta rerum? Officia ipsum incidunt debitis!</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, doloremque ipsam architecto rem dicta sequi commodi molestiae itaque doloribus odit rerum iure minus eius et delectus sit porro totam explicabo vel necessitatibus dolorum aspernatur. Nam, ipsum ad.</p>
</section>
<section class="profiles">
<div class="container">
<img src="images/faceplant.webp" alt="faceplant">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, corporis.</p>
</div>
<div class="container">
<img src="images/gangsterspongebob.png" alt="gangster spongebob">
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, repellendus!</p>
</div>
</section>`;
var storeContent = `<section class="hero3">
<h1>LOREM</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum amet et nemo quis atque esse vel quisquam hic. Officia, ratione.</p>
</section>
<section class="extraparagraphs">
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat nihil dolor ipsa voluptatem consequatur repellendus, recusandae laudantium. Officiis minima, soluta natus officia unde voluptatibus inventore sint doloremque tenetur nulla culpa maxime corporis necessitatibus delectus vero ducimus tempora ipsa placeat eveniet earum eum sapiente dicta rerum? Officia ipsum incidunt debitis!</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, doloremque ipsam architecto rem dicta sequi commodi molestiae itaque doloribus odit rerum iure minus eius et delectus sit porro totam explicabo vel necessitatibus dolorum aspernatur. Nam, ipsum ad.</p>
</section>
<section class="profiles">
<div class="container">
<img src="images/seafoodboil.jpg" alt="seafood boil">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, corporis.</p>
</div>
<div class="container">
<img src="images/karatepig.jpg" alt="Pig doing karate">
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, repellendus!</p>
</div>
</section>`;
var contactContent = `<section class="hero4">
<h1>LOREM</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum amet et nemo quis atque esse vel quisquam hic. Officia, ratione.</p>
</section>
<section class="extraparagraphs">
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat nihil dolor ipsa voluptatem consequatur repellendus, recusandae laudantium. Officiis minima, soluta natus officia unde voluptatibus inventore sint doloremque tenetur nulla culpa maxime corporis necessitatibus delectus vero ducimus tempora ipsa placeat eveniet earum eum sapiente dicta rerum? Officia ipsum incidunt debitis!</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, doloremque ipsam architecto rem dicta sequi commodi molestiae itaque doloribus odit rerum iure minus eius et delectus sit porro totam explicabo vel necessitatibus dolorum aspernatur. Nam, ipsum ad.</p>
</section>
<section class="profiles">
<div class="container">
<img src="images/skydiving.jpg" alt="skydiving">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, corporis.</p>
</div>
<div class="container">
<img src="images/smilingfish.jpg" alt="creepy fish">
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, repellendus!</p>
</div>
</section>`;

export function changePageContent(btnID){
    let pageName = btnID + "Content";
    $(app).html(eval(pageName));
}