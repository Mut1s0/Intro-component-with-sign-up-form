import { Form, Header } from "./components";


function App() {

  return (

    <main className="font-poppins py-[50px] md:py-0 md:h-screen flex items-center justify-center">

      <div className="max-w-[80%] mx-auto md:flex md:gap-[70px] md:items-center md:justify-center">

        <section className="md:w-[800px]">

          <Header />

        </section>

        <section className="md:w-[650px]">

          <Form />

        </section>

      </div>

    </main>
  )
}

export default App;