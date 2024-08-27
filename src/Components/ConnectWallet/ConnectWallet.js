import React from 'react';
import './ConnectWallet.css';
import { useNavigate } from 'react-router-dom';
import loginData from '../../Data/LoginData';
import metamask from './Image/metamask.png';

const ConnectWallet = () => {

    const navigate = useNavigate();
    async function requestAccount() {
    
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                const accountAddress = accounts[0].toLowerCase();
                for(var i=0;i<6;i++){
                    if (i === 0 && loginData[i].farmer.toLowerCase() ===accountAddress){
                        navigate('/farmer');
                    }
                    else if (i===1 && loginData[i].wholesaler.toLowerCase() === accountAddress){
                        navigate('/');
                    }
                    else if (i===2 && loginData[i].retailer.toLowerCase() === accountAddress) {
                        navigate('/accountdetails');
                    }
                    else if (i===3 && loginData[i].consumer.toLowerCase() === accountAddress) {
                        navigate('/accountdetails');
                    }
                    else if (i===4 && loginData[i].inspector.toLowerCase() === accountAddress) {
                        navigate('/accountdetails');
                    }
                    else if (i === 5 && loginData[i].admin.toLowerCase() === accountAddress) {
                        navigate('/');
                    }
                }
                
            } catch (error) {
                console.log('Error connecting...');
            }

        } else {
            alert('Meta Mask not detected');
        }
    }

    return (
        <div className="connectwallet-container">
            <header className="connectwallet-header">
                <button onClick={requestAccount}><img src={metamask} alt=''></img>Connect Wallet</button>
            </header>
        </div>
    );
};

export default ConnectWallet;