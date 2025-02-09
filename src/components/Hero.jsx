const Hero = () => {
  return (
    <section id="hero" className="section">
      <h1>Hi, I'm <span className="text-orange-400">Ankit Rawat</span></h1>
      <p className="myAbout">Frontend Developer | Minimalist Coder</p>
      <div className="about-section">
        <p>
            Right now, I've just launched this 
            <a href="your-portfolio-link" target="_blank"> minimal portfolio template</a> you're viewing. (Get it
            <a href="your-template-link" target="_blank" class="highlight">here</a>).  
            I'm also working on my own <a href="your-project-link" target="_blank">project</a>, 
            sharing my <a href="your-blog-page-link" target="_blank"> thoughts</a>, 
            and documenting my entire journey on <a href="your-twitter-link" target="_blank">linkden</a>.
        </p>
    </div>
    <a href="lnks">Get in touch --</a>
    </section>
  );
};

export default Hero;
