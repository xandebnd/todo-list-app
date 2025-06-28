import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

export const Footer = () => {
	return (
		<footer className="bg-blue-700 text-white py-6">
			<div className="container mx-auto flex flex-col items-center px-4">
				<p className="text-center text-md">
					Desenvolvido por{" "}
					<a
						href="https://github.com/xandebnd"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-300 font-bold hover:underline"
					>
						Alexandre Bandeira
					</a>{" "}
					© {new Date().getFullYear()}
				</p>
				<ul className="flex gap-5 mt-5">
					<li>
						<a
							href="https://github.com/xandebnd"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-blue-300 transition duration-300"
						>
							<FaGithub size={24} />
						</a>
					</li>
					<li>
						<a
							href="https://instagram.com/xandebnd"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-pink-400 transition duration-300"
						>
							<FaInstagram size={24} />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};
