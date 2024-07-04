import { Link } from "react-router-dom"
export function Foot() {

    return (
        <>
            <footer className="footercol text-white p-5 text-center h-60">
                <div className="max-w-5xl mx-auto flex flex-wrap justify-between">

                    <div className="flex-1 min-w-[200px] m-2">
                        <img className="-ml-24 rounded-full h-36" src="./src/assets/logo.jpeg"/>
                    </div>

                    <div className="flex-1 min-w-[200px] m-2 text-left">
                    <Link to="/About"><div className="text-lg font-semibold">Contact Us</div></Link>
                        <p>Email: <a href="mailto:financtionary@gmail.com." className="text-gray-700">financtionary@gmail.com</a></p>
                        {/* <p>Phone: <a href="tel:+" className="text-gray-700">+91 </a></p> */}
                        <p>Address: <a className="text-gray-700">G.E. Road, Raipur, India</a></p>
                    </div>

                    <div className="flex-1 min-w-[200px] m-2">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="list-none p-0">
                            <li><a href="./Home" className="text-gray-600 font-semibold">Home</a></li>
                            <li><a href="./About" className="text-gray-600 font-semibold">About Us</a></li>
                            <li><a href="https://www.linkedin.com/in/financtionary-india-530944315/" className="text-gray-600 font-semibold">Services</a></li>
                            <li><a href="financtionary@gmail.com" className="text-gray-600 font-semibold">Contact</a></li>
                        </ul>
                    </div>

                    <div className="flex-1 min-w-[200px] m-2">
                        <h3 className="text-lg font-semibold mb-5">Follow Us</h3>
                        <a href='mailto:financtionary@gmail.com' target="_blank" className="text-gray-400 mr-2">
                            <img src="./src/assets/social-media/gmail.png" alt="Facebook" className="w-10 h-10 inline-block" />
                        </a>
                        <a href="https://x.com/Financtionary" target="_blank" className="text-gray-400 mr-0 -ml-3">
                            <img src="./src/assets/social-media/twitter.png" alt="Twitter" className="w-14 h-14 inline-block" />
                        </a>
                        <a href="https://www.instagram.com/financtionary/" target="_blank" className="text-gray-400 mr-2">
                            <img src="./src/assets/social-media/instagram.png" alt="Instagram" className="w-10 h-10 inline-block" />
                        </a>
                        <a href="https://www.linkedin.com/in/financtionary-india-530944315/" target="_blank" className="text-gray-400">
                            <img src="./src/assets/social-media/linkedin.png" alt="LinkedIn" className="w-10 h-10 inline-block" />
                        </a>
                    </div>
                </div>
                <div className="mt-5">
                    <p>&copy; 2024 Financtionary. All rights reserved.</p>
                </div>
            </footer>

        </>
    )
}
