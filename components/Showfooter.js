//showfooter.js
import React from "react";
import Static from 'next/image'
import Link from 'next/link'

export default function showfooter() {
  return (
    <div className="showfooter">
      <div className="icon">
      <Static src="/Video2.png" alt="me" width="384" height="413" />
      <label>View 2</label>
      </div>
      <Link href="/about2">
      <div className="icon pointer">
      <Static src="/PDF.png" alt="me" width="144" height="145" />
      <label>Notes</label>
      </div>
      </Link>
    </div>
  );
}