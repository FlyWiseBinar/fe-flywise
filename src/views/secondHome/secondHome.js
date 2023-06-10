import React from "react";
import Button from "@/components/secondHome/Button";
import DateRow from "@/components/secondHome/DateRow";
import FilterSort from "@/components/secondHome/FilterSort";
import Loading from "@/components/secondHome/Loading";
import Empty from "@/components/secondHome/Empty";

const secondHome = () => {
  return (
    <>
      <div className="w-3/6 flex justify-center">
        <div className={`py-10 font-bold text-xl`}>Pilih Penerbangan</div>
      </div>
      <Button />
      <DateRow />
      <FilterSort />
      <Empty/>
    </>
  );
};

export default secondHome;
