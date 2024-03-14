// import {useAppSelector} from "../../hooks/redux.ts";
import {IoArrowBack} from "react-icons/io5";
import QRCode from "qrcode.react";
import {Link} from "react-router-dom";

export function WalletDeposit() {
    // const user = useAppSelector((state) => state.user.user);


    return (
        <div className='DefaultLayout_contentChildren__UAU26 m0 md:m-5 pt-12 md:pt-16 flex justify-center w-full'>
            <div className='bg-color--primary-bg flex flex-col  rounded-xl p-12 w-1/2'>
                <Link to='/wallet'>
                    <div className='flex items-center'>
                        <IoArrowBack className='text-3xl text-sky-500'/>
                        <p className='text-sky-500 text-lg'>Back to Wallet</p>
                    </div>
                </Link>
                {/*<div className='mt-7'>*/}
                {/*    <p className='text-lg mb-3'>Select method</p>*/}
                {/*    <CurrencySelector/>*/}
                {/*</div>*/}
                <p className='text-lg my-3'>
                    Enter amount</p>
                <input type="number"
                       className='w-full p-2 hover:none bg-gray-200 text-gray-600 font-bold text-lg rounded-l-md focus:outline-none'/>
                <div className='mt-10 flex flex-col justify-center items-center'>
                    <p className='text-lg my-3'>Sent USDT at this address</p>
                    <QRCode value='asjidyh12873127kjhsdkjahsd'/>
                    <button
                        type='submit'
                        className='bg-sky-400 mt-5 text-white px-4 rounded-xl py-5'>
                       Continue
                    </button>

                </div>
            </div>

        </div>
    );
}