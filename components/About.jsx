import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit eveniet
                        repellat quasi nihil fugiat a asperiores, quaerat iusto assumenda placeat
                        neque quibusdam perspiciatis beatae, dolores deserunt eligendi esse! Rem
                        accusamus minus ipsam voluptatem quas modi dolore quo iste recusandae illum
                        ducimus pariatur quod, laborum nemo est perferendis exercitationem labore
                        aperiam consectetur asperiores in odit quia! Asperiores autem delectus
                        facere, sapiente fugiat quidem quas vero nostrum sed iste! Minima ipsa unde
                        odit blanditiis enim perspiciatis earum at veritatis eum, adipisci rerum,
                        inventore itaque voluptates asperiores error? Quaerat quos deserunt
                        excepturi ullam!
                    </p>
                    <p className="py-2 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos possimus fuga
                        animi laborum facere nobis tenetur commodi, minima, assumenda provident
                        iusto optio impedit officiis neque molestiae corrupti explicabo repudiandae
                        ad, quos labore accusantium ipsum. Alias aliquid, quia perspiciatis libero
                        vel laboriosam sint earum nihil reiciendis illo, ullam consequatur modi
                        nesciunt!
                    </p>
                    <p className="py-2 text-gray-600 hover:underline cursor-pointer">
                        Check out some of my latest projects.
                    </p>
                </div>
                <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image
                        className="rounded-xl"
                        src="/../public/assets/profile-image.png"
                        alt="profile image"
                        width="500"
                        height="350"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
