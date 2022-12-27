import React,{useContext, useState,useEffect} from "react";
const getNextpage=()=>{
    dispatchEvent({
        type:"NEXT_PAGE",
    });
};
const getPrevpage=()=>{
    dispatchEvent({
        type:"PREV_PAGE",
    });
};
const useGlobalContext=()=>{
    return useContext(AppC
        );
}
export default useGlobalContext;