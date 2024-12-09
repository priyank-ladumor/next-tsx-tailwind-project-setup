'use client';

import { useRouter } from "next/navigation";
import { paths } from "src/routes/paths";

export default function Error404() {
    const router = useRouter();
    return (
        <div>
            <section className="forbidden">
                <h3 className="pt-32" >404</h3>
                <p>The page you were looking for could not be found.</p>
                <span className="cursor-pointer hover:text-blue-500" onClick={() => router.push(paths.home.root)}>Return to home page</span>
            </section>
        </div>
    )
}

