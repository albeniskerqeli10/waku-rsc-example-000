"use client"
import { Link } from "waku"
import {ComponentPropsWithoutRef, ReactNode} from 'react';
import { useChangeLocation } from "waku/router/client";




type CustomLinkProps = {
    to:string;
    children:ReactNode;
     prefetch:boolean;
     params?:any;
    itemId?:number | string;
} & ComponentPropsWithoutRef<('a')>


const CustomLink = ({to, children, prefetch,params, itemId, ...rest}:CustomLinkProps) => {
    const navigate = useChangeLocation();
    return (
        <>
        <a {...rest}   

 /*id='linknew'*/  onMouseEnter={() => {
            if(!prefetch) {
                return;
            }
            const link  = document.createElement('link');
            link.rel = 'prefetch';
            link.as='fetch';
            link.href=`https://api.escuelajs.co/api/v1/products/${itemId}`;
            const head = document.head.innerHTML;
            if(!head.includes(link.href)) {
                document.head.appendChild(link);
            }
        }}
        // onFocus={() => {
        //     const link  = document.createElement('link');
        //     link.rel = 'prefetch';
        //     link.as='fetch';
        //     link.href=`https://api.escuelajs.co/api/v1/products/${itemId}`;
        //     document.head.appendChild(link);
        // }}
        onClick={(e) => {
            e.preventDefault();
            navigate(to,params ? new URLSearchParams(params) : undefined, {scrollTo:false})
            }
             
        //    e.currentTarget.addEventListener('click', (e => {
        //     e.preventDefault();
        //     e.stopPropagation;
        //     return false;
        //    }))
        //     return false;
            // e.preventDefault();
            // e.stopPropagation();
            // window.history.scrollRestoration = "manual";
            // let lnk = document.getElementById('linknew') as HTMLLinkElement;        
            // lnk.href = "#!"
             }/*}*/ >
        {children}
        
        </a>
        </>
    )
}

export default CustomLink;

