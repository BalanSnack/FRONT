import React from "react";
import Pagination from "@/components/molecules/Pagination/Pagination";
import { useState } from "react";

export default function CategoryListPage() {
  const [page, setPage] = useState<number>(1);

  const pageHandler = (pageNum: number) => {
    setPage(pageNum);
  };

  return (
    <div>
      <h1>카테고리 리스트 페이지</h1>
      <Pagination fullPage={15} page={page} pageHandler={pageHandler} />
    </div>
  );
}
