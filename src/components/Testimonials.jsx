
const Testimonials = () => {
    return(
        
    <section className="testimonials">
    <h2 className="sniff">I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
    <img src={require("../assets/images/dog-img.jpg")} alt="dogimage" className="dog" /><br />
            <em>Pebbles, New York</em>
    <div className="img-img">
                <img src={ require("../assets/images/mashable.png") } alt="image" />
                 <img src={require("../assets/images/bizinsider.png")} alt="image" /> 
                <img src={ require("../assets/images/TechCrunch.png") } alt="image" />       
    </div>
</section>

// {/* <section className="img">

// </section> */}


    )
}

export default Testimonials;