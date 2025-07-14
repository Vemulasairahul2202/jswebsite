function Form1() {
    return (
        <div className="bg-[#007bff] p-4 rounded-lg   mx-auto">
            <div className="w-full">
                <h1 className="font-semibold text-white mb-2 break-words">GET IN TOUCH</h1>
                <p className="text-white text-xs break-words">
                    Let's get this conversation started.
                </p>
            </div>

            <div className="mt-3">
                <form className="flex flex-col space-y-3">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        name="number"
                        placeholder="Phone Number"
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        name="job"
                        placeholder="Message"
                        className="border p-2 h-24 rounded w-full"
                    />
                    <button
                        type="submit"
                        className="bg-blue-950 text-white p-2 rounded-lg hover:bg-green-800 transition hover:scale-105 w-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Form1;
