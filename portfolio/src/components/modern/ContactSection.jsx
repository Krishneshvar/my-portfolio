
export default function ContactSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-[#537FE7] -mt-6 rounded-t-[2rem] p-6">
      <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
      <form className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea id="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <button type="submit" className="bg-[#537FE7] hover:bg-[#3a5bbd] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
      </form>
    </section>
  );
}
