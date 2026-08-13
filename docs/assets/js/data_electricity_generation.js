const headers = [
    "Country",
    "Amount of the fine for electricity generation without license and not connected to the national grid for internal needs",
    "Number of years of imprisonment for electricity generation without license and not linked to any grid or network for internal needs",
    "Possible use of free energy devices for internal needs without licence",
    "Possible control of the power plant by any jurisdictions without that the producer holds a license",
    "Flixbus in the capital"
];

const dataEurope = [
    {'k1': 'Albania', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'Germany', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'Yes'},
    {'k1': 'Andorra', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Austria', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'Yes'},
    {'k1': 'Belgium', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 5 Mws / Hydrogen', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'Bielorussia / Belarus', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'Yes'},
    {'k1': 'Bosnia Herzegovine', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'Yes'},
    {'k1': 'Bulgarie', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 5 MW / Any devices', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'Chyprus', 'k2': '90000,00 €', 'k3': '3', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Croatia', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 1 MW / Any devices', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'Danmark', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'Yes'},
    {'k1': 'Spain', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 250 kW / any devices', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'Estonia', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 100 kW / Any devices', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'Finland', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'France', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 50 Mws / Hydrogen', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'Greece', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 20 kW / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Hungary', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 50 MW / Any devices', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'Ireland', 'k2': '100000,00 €', 'k3': '0', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Iceland', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 1 MW / Hydrogen', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Italy', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'Yes'},
    {'k1': 'Lettonie', 'k2': '?', 'k3': '?', 'k4': 'No', 'k5': 'Yes', 'k6': 'Yes'},
    {'k1': 'Liechtenstein', 'k2': '?', 'k3': '?', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Lithuania', 'k2': '?', 'k3': '?', 'k4': 'No', 'k5': 'Yes', 'k6': 'Yes'},
    {'k1': 'Luxembourg', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 50 kW / Hydrogen', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'North Macedoine', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'Yes'},
    {'k1': 'Malta', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Moldova', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 20 MW / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Monaco', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Montenegro', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited powers / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Norway', 'k2': '?', 'k3': '1', 'k4': 'No', 'k5': 'Yes', 'k6': 'Yes'},
    {'k1': 'The Netherlands', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 500 Mws / Hydrogen', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'Poland', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'Yes'},
    {'k1': 'Portugal', 'k2': '?', 'k3': '?', 'k4': 'No', 'k5': 'Yes', 'k6': 'Yes'},
    {'k1': 'Republic Tcheque', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'Roumania', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'England', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 100 Mws / Hydrogen', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'Russia', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'San Marino', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Serbia', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 1 MW / Any devices', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'Slovakia', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 1 MW / Any devices', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'Slovenia', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 1 MW / Any devices', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'Sweden', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'Yes'},
    {'k1': 'Switzerland', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'Yes'},
    {'k1': 'Ukraine', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 5 MW / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Vatican', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'Yes'},
    {'k1': 'Guernesey', 'k2': '2500000,00 €', 'k3': '5', 'k4': '?', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Isle of Man', 'k2': '5000,00 €', 'k3': '0', 'k4': '?', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Jersey island', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Kosovo', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited powers / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Ile Aland', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Faroe Islands', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Gibraltar', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Svalbard', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Akrotiri and Dhekelia', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'North Chyprus', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Transnistria', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'}
];

const dataAsia=[
    {'k1': 'Afghanistan', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Saudi Arabia', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Armenia', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Azerbaïdjan', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Bahrain', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Bangladesh', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Bhutan', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 500 kW / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Myanmar', 'k2': 'Three hundred thousand kyats to a maximum of one million kyats', 'k3': '0', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Brunei', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Cambodia', 'k2': '400,000 Riels to 4,000,000 Riels per day for every day ', 'k3': '1 to 3 years', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'China', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'North Korea', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'South Korea', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'United Arab Emirates', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Georgia', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'India', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Indonesia', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Iraq', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Iran', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Israel', 'k2': '?', 'k3': '3', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Japan', 'k2': '1 million yen', 'k3': '5', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Jordan', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Kazakhstan', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Kyrgyzstan', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 1 MW / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Kuwait', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Laos', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Lebanon', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Malaysia', 'k2': '100 thousand ringgit', 'k3': '5', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'The Maldives', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Mongolia', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 1,5 MW / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Nepal', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 1 MW / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Oman', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 25 MW / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Uzbekistan', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Pakistan', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Palestine', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Philippines', 'k2': 'Fifty million pesos ', 'k3': '2', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Qatar', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Singapore', 'k2': '$500,000', 'k3': '0', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Sri Lanka', 'k2': 'A fine not less than one hundred thousand rupees and not exceeding ten million rupees', 'k3': '0', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Syria', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Tajikistan', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Thailand', 'k2': '0,00 €', 'k3': '2', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Timor Leste', 'k2': 'a fine of US$ 500 to US$ 5,000 or of US$ 5,000 to US$ 50,000,', 'k3': '0', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Turkmenistan', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Vietnam', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Yemen', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Kurdistan', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Tibet', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Ryūkyū', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Christmas island', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Cocos island', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Hong Kong', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Macao', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Abkhazie', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Haut-Karabagh', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'South Ossetia', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Taiwan', 'k2': 'NT$200,000 to NT$2,000,000', 'k3': '0', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'}
];

const dataAfrica=[
    {'k1': 'South Africa', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Algeria', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 25 MW with declaration / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Angola', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Benin', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Botswana', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 25 kW / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Burkina Faso', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Burundi', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Cameroon', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 100 kW / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Cape Verde', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Central African Republic', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Comoros', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Republic of Congo', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Democratic Republic Of The Congo', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Ivory coast', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Djibouti', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Egypt', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Eritrea', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Ethiopia', 'k2': '?', 'k3': '?', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Eswatini', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Gabon', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Gambia', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Ghana', 'k2': '?', 'k3': '?', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Guinea', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Guinea Bissau', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Equatorial Guinea', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Kenya', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 1 MW / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Lesotho', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Liberia', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Libya', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Madagascar', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Malawi', 'k2': '?', 'k3': '?', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Mali', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Morocco', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Mauritius', 'k2': '100,000 rupees', 'k3': '5', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Mauritania', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Mozambique', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Namibia', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Niger', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Nigeria', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 1 MW / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Uganda', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 0,5 MW / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Rwanda', 'k2': '?', 'k3': '?', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Sao Tome And Principe', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Senegal', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Sierra Leone', 'k2': '?', 'k3': '?', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Somalia', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Sudan', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'South Sudan', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Tanzania', 'k2': '?', 'k3': '?', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Tchad', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Togo', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Tunisia', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Zambia', 'k2': '?', 'k3': '?', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Zimbabwe', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 100 kW / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Seychelles', 'k2': 'SCR 200,000', 'k3': '2', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'}
];

const dataAmerica=[
    {'k1': 'Antigua And Barbuda', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices',
     'k5': 'No', 'k6': 'No'},
    {'k1': 'Argentina', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Bahamas', 'k2': '2000,00 €', 'k3': '2', 'k4': 'Yes up to 250 kW / any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Barbados', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 5 kW / any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Belize', 'k2': '5000,00 €', 'k3': '1', 'k4': 'Yes up to 75 kW / any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Bolivia', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Brazil', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 50 MW / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Canada', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Chile', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Colombia', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to 1 MW / Any devices', 'k5': 'No', 'k6': 'No'},
    {'k1': 'Costa Rica', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Cuba', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Dominican Republic', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices',
     'k5': 'No', 'k6': 'No'},
    {'k1': 'Dominique', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Ecuador', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Usa', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Grenada', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Guatemala', 'k2': '?', 'k3': '?', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Guyana', 'k2': '50000,00 €', 'k3': '5', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Haiti', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Honduras', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Jamaica', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Mexcio', 'k2': '?', 'k3': '?', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Panama', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Nicaragua', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Paraguay', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Peru', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Saint Kitts And Nevis', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Saint Lucia', 'k2': '5000,00 €', 'k3': '1', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Saint Vincent And The Grenadines', 'k2': '750,00 €', 'k3': '1', 'k4': 'No', 'k5': 'Yes',
     'k6': 'No'},
    {'k1': 'El Salvador', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Suriname', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Trinidad And Tobago', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Uruguay', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Venezuela', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Puerto Rico', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices',
     'k5': 'No', 'k6': 'No'},
    {'k1': 'American Virgin Islands', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Galápagos island', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Archipel of San Andrés, Providencia and Santa Catalina', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?',
     'k6': 'No'},
    {'k1': 'Navasse island', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Cayman Islands', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices',
     'k5': 'No', 'k6': 'No'},
    {'k1': 'Greenland', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Turks And Caicos Islands', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'British Virgin Islands', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices',
     'k5': 'No', 'k6': 'No'},
    {'k1': 'Caribbean Netherlands', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Anguilla', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Aruba', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Montserrat', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Clipperton island', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Bermuda', 'k2': '50000,00 €', 'k3': '5', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Curaçao', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Bonaire', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Malouines island', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Saba', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'San Eustache', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'}
];

const dataOceania=[
    {'k1': 'Australia', 'k2': '20000,00 €', 'k3': '0', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Fiji', 'k2': '?', 'k3': '?', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Kiribati', 'k2': '?', 'k3': '?', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Marshall Islands', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Federated States Of Micronesia', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Nauru', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'New Zealand', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices',
     'k5': 'No', 'k6': 'No'},
    {'k1': 'Palau', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Papua New Guinea',
     'k2': 'Penalty: A fine not exceeding K10,000,000.00. Default penalty: A fine not exceeding K1,000,000', 'k3': '0', 'k4': 'No', 'k5': 'Yes', 'k6': 'No'},
    {'k1': 'Solomon Islands', 'k2': '50 euros per day of offences', 'k3': '0', 'k4': 'No', 'k5': 'Yes',
     'k6': 'No'},
    {'k1': 'Samoa', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Tonga', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Vanuatu', 'k2': '0,00 €', 'k3': '0', 'k4': 'Yes up to unlimited power / Any devices', 'k5': 'No',
     'k6': 'No'},
    {'k1': 'Tuvalu', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Cook Islands', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Niue', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Northern Mariana Islands', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Norfolk Island', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Guam', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Hawaï', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Atoll Johnston', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Atoll Palmyra', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Gambier island', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Midway island', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Pitcairn Islands', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Chatham island', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Tuamotu island', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'American Samoa', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Tokelau', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Paques island', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Falkland Islands', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?', 'k6': 'No'},
    {'k1': 'Saint Helena  Ascension And Tristan Da Cunha', 'k2': '?', 'k3': '?', 'k4': '?', 'k5': '?',
     'k6': 'No'}
];

function createTable(data){
    let html = `
    <div class="table-responsive">

    <table class="table table-striped table-bordered">

    <thead>

    <tr>

    ${headers.map(h=>`<th>${h}</th>`).join("")}

    </tr>

    </thead>


    <tbody>

    `;


    data.forEach(country=>{

    html += `

    <tr>

    <td>${country.k1}</td>

    <td>${country.k2}</td>

    <td>${country.k3}</td>

    <td>${country.k4}</td>

    <td>${country.k5}</td>

    <td>${country.k6}</td>

    </tr>

    `;

    });


    html += `

    </tbody>

    </table>

    </div>

    `;


    return html;
}

document.getElementById("tableEurope").innerHTML = createTable(dataEurope);

document.getElementById("tableAsia").innerHTML = createTable(dataAsia);

document.getElementById("tableAfrica").innerHTML = createTable(dataAfrica);

document.getElementById("tableAmerica").innerHTML = createTable(dataAmerica);

document.getElementById("tableOceania").innerHTML = createTable(dataOceania);