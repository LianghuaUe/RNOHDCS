import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import * as React from 'react';
import { SafeAreaView, ScrollView, View, StatusBar } from 'react-native';
import * as RNLocalize from 'react-native-localize';

export function RNLocalizeTest() {
    return (
        <Tester>
            <ScrollView>
                <TestSuite name="RNLocalize">
                    <TestCase
                        itShould="RNLocalize.getLocales"
                        fn={({ expect }: any) => {
                            let local = RNLocalize.getLocales();
                            expect(local).to.be.a('Array');
                        }}
                    />
                    <TestCase
                        itShould="RNLocalize.getNumberFormatSettings"
                        fn={({ expect }: any) => {
                            let numberFormatSettings = RNLocalize.getNumberFormatSettings();
                            expect(numberFormatSettings).to.be.a('Object');
                        }}
                    />
                    <TestCase
                        itShould="RNLocalize.getCurrencies"
                        fn={({ expect }: any) => {
                            let currencies = RNLocalize.getCurrencies();
                            expect(currencies).to.be.a('Array');
                        }}
                    />
                    <TestCase
                        itShould="RNLocalize.getCountry"
                        fn={({ expect }: any) => {
                            let country = RNLocalize.getCountry();
                            expect(country).to.be.a('string');
                        }}
                    />
                    <TestCase
                        itShould="RNLocalize.getCalendar"
                        fn={({ expect }: any) => {
                            let calendar = RNLocalize.getCalendar();
                            expect(calendar).to.be.a('string');
                        }}
                    />
                    <TestCase
                        itShould="RNLocalize.getTemperatureUnit"
                        fn={({ expect }: any) => {
                            let temperatureUnit = RNLocalize.getTemperatureUnit();
                            expect(temperatureUnit).to.be.a('string');
                        }}
                    />
                    <TestCase
                        itShould="RNLocalize.getTimeZone"
                        fn={({ expect }: any) => {
                            let tTimeZone = RNLocalize.getTimeZone();
                            expect(tTimeZone).to.be.a('string');
                        }}
                    />
                    <TestCase
                        itShould="RNLocalize.uses24HourClock"
                        fn={({ expect }: any) => {
                            let uses24HourClock = RNLocalize.uses24HourClock();
                            expect(uses24HourClock).to.be.false;
                        }}
                    />
                    <TestCase
                        itShould="RNLocalize.usesMetricSystem"
                        fn={({ expect }: any) => {
                            let usesMetricSystem = RNLocalize.usesMetricSystem();
                            expect(usesMetricSystem).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="RNLocalize.usesAutoDateAndTime"
                        fn={({ expect }: any) => {
                            let usesAutoDateAndTime = RNLocalize.usesAutoDateAndTime();
                            expect(usesAutoDateAndTime).to.be.undefined;
                        }}
                    />
                    <TestCase
                        itShould="RNLocalize.usesAutoTimeZone"
                        fn={({ expect }: any) => {
                            let usesAutoTimeZone = RNLocalize.usesAutoTimeZone();
                            expect(usesAutoTimeZone).to.be.undefined;
                        }}
                    />
                    <TestCase
                        itShould="RNLocalize.findBestLanguageTag"
                        fn={({ expect }: any) => {
                            let findBestLanguageTag = RNLocalize.findBestLanguageTag([
                                'en-US',
                                'en',
                                'fr',
                                'zh',
                            ]);
                            expect(findBestLanguageTag).to.be.a('Object');
                        }}
                    />
                </TestSuite>
            </ScrollView>
        </Tester>
    );
}
