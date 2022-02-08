import React from 'react'
import Layout from '../containers/Layout'
import { Contact } from '../components'
import { Jumbotron, PaymentSteps } from '../components/PayInInstallments'

export default function PayInstallments(){
    return(
        <Layout>
            <Jumbotron/>
            <PaymentSteps/>
            <Contact/>
        </Layout>
    )
}

