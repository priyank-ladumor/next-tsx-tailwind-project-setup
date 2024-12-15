'use client';

import { useRouter } from "next/navigation";
import { paths } from "src/routes/paths";

const Error500 = () => {
    const router = useRouter();
    return (
        <>
            <section className="forbidden">
                <h3 className="pt-32" >500</h3>
                <p>Internal Server Error, please try again later.</p>
                <span className="cursor-pointer hover:text-blue-500" onClick={() => router.push(paths.home.root)}>Return to home page</span>
            </section>
        </>
    )
}

export default Error500

