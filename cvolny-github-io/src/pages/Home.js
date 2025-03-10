const Home = () => {
    return (
      <div class="container pt-4">
        <header class="h1">
          Cupcake Christi Volny <small>(she/her)</small>
        </header>
        <div class="alert alert-light m-3 border p-3">
          <kbd class="h3 text-white">Hello World!</kbd>
          <button type="button" class="btn-close float-end" data-bs-dismiss="alert"></button>
          <blockquote class="mt-3 mb-1 font-monospace">And with the invocation of the sacred words, the ancient spell written
            since time immomorial, Cupcake spake a web homepage into existence.</blockquote>
        </div>

        <div id="about" class="my-3">
          <p>Cupcake is a life-long student (polymath) with a diverse history of student, community, and political
            involvement, an electronic musician / producer, a digital effects and photographic artist, and finally a career
            security engineer with strong opinions on effective design and maintainable architecture.</p>
        </div>
      </div>
    );
  };

  export default Home;
