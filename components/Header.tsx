import Link from "next/link";
import styles from "./header.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Header() {
  return (
    <div>
      <h1>
        <Link href="/">
          <a>PORTFOLIO</a>
        </Link>
      </h1>
    </div>
  );
}
