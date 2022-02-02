//More.js
import React from "react"
import Static from 'next/image'
import Link from 'next/link'


export default function More() {
  return (
    <div className="morefooter">
         <Link href="/about">→</Link>
    </div>
  );
}