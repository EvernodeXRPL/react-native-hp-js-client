import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { Buffer } from 'buffer';
import { generateKeys, createClient, protocols, events } from './hp-client-lib'

export default function App() {

    const hpServer = 'wss://localhost:8081';

    async function connect() {
        const keys = await generateKeys();

        const pkhex = Buffer.from(keys.publicKey).toString('hex');
        console.log('My public key is: ' + pkhex);

        // Simple connection to single server without any validations.
        const hpc = await createClient([hpServer], keys, { protocol: protocols.json });

        hpc.on(events.disconnect, () => {
            console.log('Disconnected');
        })

        // This will get fired as servers connects/disconnects.
        hpc.on(events.connectionChange, (server, action) => {
            console.log(server + " " + action);
        })

        // This will get fired when contract sends outputs.
        hpc.on(events.contractOutput, (r) => {
            r.outputs.forEach(o => {
                const outputLog = o.length <= 512 ? o : `[Big output (${o.length / 1024} KB)]`;
                console.log(`Output (ledger:${r.ledgerSeqNo})>> ${outputLog}`);
            });
        })

        // This will get fired when the unl public key list changes.
        hpc.on(events.unlChange, (unl) => {
            console.log("New unl received:");
            console.log(unl); // unl is an array of public keys.
        })

        // This will get fired when any ledger event occurs (ledger created, sync status change).
        hpc.on(events.ledgerEvent, (ev) => {
            console.log(ev);
        })

        // This will get fired when any health event occurs (proposal stats, connectivity changes...).
        hpc.on(events.healthEvent, (ev) => {
            console.log(ev);
        })

        // Establish HotPocket connection.
        if (!await hpc.connect()) {
            console.log('Connection failed.');
            return;
        }
        console.log('HotPocket Connected.');

        const stat = await hpc.getStatus();
        console.log("stat ", stat);

        const response = await hpc.submitContractReadRequest("My read request");
        console.log("read req ", response);

        const input = await hpc.submitContractInput("My input");
        console.log("input ", input);
        const submissionResult = await input.submissionStatus;
        console.log("submissionResult ", submissionResult);
    }


    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
            <Button title="Create Client" onPress={connect} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
