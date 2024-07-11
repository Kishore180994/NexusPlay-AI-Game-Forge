import Header from "../components/Header";

export default function About() {
  return (
    <main>
      <Header />
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">
          About Nexus Play: AI Game Forge
        </h1>
        <p className="text-lg mb-4">
          Nexus Play: AI Game Forge is an innovative platform that harnesses the
          power of artificial intelligence to help game developers and
          enthusiasts bring their ideas to life.
        </p>
        <p className="text-lg mb-4">
          Our mission is to democratize game development by providing tools and
          resources that make it easier for anyone to create engaging, unique
          games.
        </p>
        <p className="text-lg">
          Whether you are a seasoned developer or a complete beginner, Nexus
          Play: AI Game Forge is here to support your creative journey in game
          design and development.
        </p>
      </section>
    </main>
  );
}
