import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import styles from "./../Sell/Sell.module.css";

const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: "#fff",
        },
      },
    },
  },
});

export default function Cities({ userInput, setUserInput }) {
  const [location, setLocation] = React.useState("");
  const handleChange = (event) => {
    const selectedCity = event.target.value;
    setLocation(selectedCity);
    setUserInput(selectedCity);
    console.log(selectedCity);
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box sx={{ minWidth: 220 }}>
          <FormControl sx={{ minWidth: 220 }}>
            <InputLabel id="demo-simple-select-label">Select City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="Abbottabad">Abbottabad</MenuItem>
              <MenuItem value="Adezai">Adezai</MenuItem>
              <MenuItem value="Ali Bandar">Ali Bandar</MenuItem>
              <MenuItem value="Amir Chah">Amir Chah</MenuItem>
              <MenuItem value="Attock">Attock</MenuItem>
              <MenuItem value="Ayubia">Ayubia</MenuItem>
              <MenuItem value="Bahawalpur">Bahawalpur</MenuItem>
              <MenuItem value="Baden">Baden</MenuItem>
              <MenuItem value="Bagh">Bagh</MenuItem>
              <MenuItem value="Bahawalnagar">Bahawalnagar</MenuItem>
              <MenuItem value="Burewala">Burewala</MenuItem>
              <MenuItem value="Banda Daud Shah">Banda Daud Shah</MenuItem>
              <MenuItem value="Bannu district|Bannu">Bannu</MenuItem>
              <MenuItem value="Batagram">Batagram</MenuItem>
              <MenuItem value="Bazdar">Bazdar</MenuItem>
              <MenuItem value="Bela">Bela</MenuItem>
              <MenuItem value="Bellpat">Bellpat</MenuItem>
              <MenuItem value="Bhag">Bhag</MenuItem>
              <MenuItem value="Bhakkar">Bhakkar</MenuItem>
              <MenuItem value="Bhalwal">Bhalwal</MenuItem>
              <MenuItem value="Bhimber">Bhimber</MenuItem>
              <MenuItem value="Birote">Birote</MenuItem>
              <MenuItem value="Buner">Buner</MenuItem>
              <MenuItem value="Burj">Burj</MenuItem>
              <MenuItem value="Chiniot">Chiniot</MenuItem>
              <MenuItem value="Chachro">Chachro</MenuItem>
              <MenuItem value="Chagai">Chagai</MenuItem>
              <MenuItem value="Chah Sandan">Chah Sandan</MenuItem>
              <MenuItem value="Chailianwala">Chailianwala</MenuItem>
              <MenuItem value="Chakdara">Chakdara</MenuItem>
              <MenuItem value="Chakku">Chakku</MenuItem>
              <MenuItem value="Chakwal">Chakwal</MenuItem>
              <MenuItem value="Chaman">Chaman</MenuItem>
              <MenuItem value="Charsadda">Charsadda</MenuItem>
              <MenuItem value="Chhatr">Chhatr</MenuItem>
              <MenuItem value="Chichawatni">Chichawatni</MenuItem>
              <MenuItem value="Chitral">Chitral</MenuItem>
              <MenuItem value="Dadu">Dadu</MenuItem>
              <MenuItem value="Dera Ghazi Khan">Dera Ghazi Khan</MenuItem>
              <MenuItem value="Dera Ismail Khan">Dera Ismail Khan</MenuItem>
              <MenuItem value="Dalbandin">Dalbandin</MenuItem>
              <MenuItem value="Dargai">Dargai</MenuItem>
              <MenuItem value="Darya Khan">Darya Khan</MenuItem>
              <MenuItem value="Daska">Daska</MenuItem>
              <MenuItem value="Dera Bugti">Dera Bugti</MenuItem>
              <MenuItem value="Dhana Sar">Dhana Sar</MenuItem>
              <MenuItem value="Digri">Digri</MenuItem>
              <MenuItem value="Dina City|Dina">Dina</MenuItem>
              <MenuItem value="Dinga">Dinga</MenuItem>
              <MenuItem value="Diplo, Pakistan|Diplo">Diplo</MenuItem>
              <MenuItem value="Diwana">Diwana</MenuItem>
              <MenuItem value="Dokri">Dokri</MenuItem>
              <MenuItem value="Drosh">Drosh</MenuItem>
              <MenuItem value="Duki">Duki</MenuItem>
              <MenuItem value="Dushi">Dushi</MenuItem>
              <MenuItem value="Duzab">Duzab</MenuItem>
              <MenuItem value="Faisalabad">Faisalabad</MenuItem>
              <MenuItem value="Fateh Jang">Fateh Jang</MenuItem>
              <MenuItem value="Ghotki">Ghotki</MenuItem>
              <MenuItem value="Gwadar">Gwadar</MenuItem>
              <MenuItem value="Gujranwala">Gujranwala</MenuItem>
              <MenuItem value="Gujrat">Gujrat</MenuItem>
              <MenuItem value="Gadra">Gadra</MenuItem>
              <MenuItem value="Gajar">Gajar</MenuItem>
              <MenuItem value="Gandava">Gandava</MenuItem>
              <MenuItem value="Garhi Khairo">Garhi Khairo</MenuItem>
              <MenuItem value="Garruck">Garruck</MenuItem>
              <MenuItem value="Ghakhar Mandi">Ghakhar Mandi</MenuItem>
              <MenuItem value="Ghanian">Ghanian</MenuItem>
              <MenuItem value="Ghauspur">Ghauspur</MenuItem>
              <MenuItem value="Ghazluna">Ghazluna</MenuItem>
              <MenuItem value="Girdan">Girdan</MenuItem>
              <MenuItem value="Gulistan">Gulistan</MenuItem>
              <MenuItem value="Gwash">Gwash</MenuItem>
              <MenuItem value="Hyderabad">Hyderabad</MenuItem>
              <MenuItem value="Hala">Hala</MenuItem>
              <MenuItem value="Haripur">Haripur</MenuItem>
              <MenuItem value="Hab Chauki">Hab Chauki</MenuItem>
              <MenuItem value="Hafizabad">Hafizabad</MenuItem>
              <MenuItem value="Hameedabad">Hameedabad</MenuItem>
              <MenuItem value="Hangu">Hangu</MenuItem>
              <MenuItem value="Harnai">Harnai</MenuItem>
              <MenuItem value="Hasilpur">Hasilpur</MenuItem>
              <MenuItem value="Haveli Lakha">Haveli Lakha</MenuItem>
              <MenuItem value="Hinglaj">Hinglaj</MenuItem>
              <MenuItem value="Hoshab">Hoshab</MenuItem>
              <MenuItem value="Islamabad">Islamabad</MenuItem>
              <MenuItem value="Islamkot">Islamkot</MenuItem>
              <MenuItem value="Ispikan">Ispikan</MenuItem>
              <MenuItem value="Jacobabad">Jacobabad</MenuItem>
              <MenuItem value="Jamshoro">Jamshoro</MenuItem>
              <MenuItem value="Jhang">Jhang</MenuItem>
              <MenuItem value="Jhelum">Jhelum</MenuItem>
              <MenuItem value="Jamesabad">Jamesabad</MenuItem>
              <MenuItem value="Jampur">Jampur</MenuItem>
              <MenuItem value="Janghar">Janghar</MenuItem>
              <MenuItem value="Jati, Jati(Mughalbhin)">Jati</MenuItem>
              <MenuItem value="Jauharabad">Jauharabad</MenuItem>
              <MenuItem value="Jhal">Jhal</MenuItem>
              <MenuItem value="Jhal Jhao">Jhal Jhao</MenuItem>
              <MenuItem value="Jhatpat">Jhatpat</MenuItem>
              <MenuItem value="Jhudo">Jhudo</MenuItem>
              <MenuItem value="Jiwani">Jiwani</MenuItem>
              <MenuItem value="Jungshahi">Jungshahi</MenuItem>
              <MenuItem value="Karachi">Karachi</MenuItem>
              <MenuItem value="Kotri">Kotri</MenuItem>
              <MenuItem value="Kalam">Kalam</MenuItem>
              <MenuItem value="Kalandi">Kalandi</MenuItem>
              <MenuItem value="Kalat">Kalat</MenuItem>
              <MenuItem value="Kamalia">Kamalia</MenuItem>
              <MenuItem value="Kamararod">Kamararod</MenuItem>
              <MenuItem value="Kamber">Kamber</MenuItem>
              <MenuItem value="Kamokey">Kamokey</MenuItem>
              <MenuItem value="Kanak">Kanak</MenuItem>
              <MenuItem value="Kandi">Kandi</MenuItem>
              <MenuItem value="Kandiaro">Kandiaro</MenuItem>
              <MenuItem value="Kanpur">Kanpur</MenuItem>
              <MenuItem value="Kapip">Kapip</MenuItem>
              <MenuItem value="Kappar">Kappar</MenuItem>
              <MenuItem value="Karak City">Karak City</MenuItem>
              <MenuItem value="Karodi">Karodi</MenuItem>
              <MenuItem value="Kashmor">Kashmor</MenuItem>
              <MenuItem value="Kasur">Kasur</MenuItem>
              <MenuItem value="Katuri">Katuri</MenuItem>
              <MenuItem value="Keti Bandar">Keti Bandar</MenuItem>
              <MenuItem value="Khairpur">Khairpur</MenuItem>
              <MenuItem value="Khanaspur">Khanaspur</MenuItem>
              <MenuItem value="Khanewal">Khanewal</MenuItem>
              <MenuItem value="Kharan">Kharan</MenuItem>
              <MenuItem value="kharian">kharian</MenuItem>
              <MenuItem value="Khokhropur">Khokhropur</MenuItem>
              <MenuItem value="Khora">Khora</MenuItem>
              <MenuItem value="Khushab">Khushab</MenuItem>
              <MenuItem value="Khuzdar">Khuzdar</MenuItem>
              <MenuItem value="Kikki">Kikki</MenuItem>
              <MenuItem value="Klupro">Klupro</MenuItem>
              <MenuItem value="Kohan">Kohan</MenuItem>
              <MenuItem value="Kohat">Kohat</MenuItem>
              <MenuItem value="Kohistan">Kohistan</MenuItem>
              <MenuItem value="Kohlu">Kohlu</MenuItem>
              <MenuItem value="Korak">Korak</MenuItem>
              <MenuItem value="Korangi">Korangi</MenuItem>
              <MenuItem value="Kot Sarae">Kot Sarae</MenuItem>
              <MenuItem value="Kotli">Kotli</MenuItem>
              <MenuItem value="Lahore">Lahore</MenuItem>
              <MenuItem value="Larkana">Larkana</MenuItem>
              <MenuItem value="Lahri">Lahri</MenuItem>
              <MenuItem value="Lakki Marwat">Lakki Marwat</MenuItem>
              <MenuItem value="Lasbela">Lasbela</MenuItem>
              <MenuItem value="Latamber">Latamber</MenuItem>
              <MenuItem value="Layyah">Layyah</MenuItem>
              <MenuItem value="Leiah">Leiah</MenuItem>
              <MenuItem value="Liari">Liari</MenuItem>
              <MenuItem value="Lodhran">Lodhran</MenuItem>
              <MenuItem value="Loralai">Loralai</MenuItem>
              <MenuItem value="Lower Dir">Lower Dir</MenuItem>
              <MenuItem value="Shadan Lund">Shadan Lund</MenuItem>
              <MenuItem value="Multan">Multan</MenuItem>
              <MenuItem value="Mandi Bahauddin">Mandi Bahauddin</MenuItem>
              <MenuItem value="Mansehra">Mansehra</MenuItem>
              <MenuItem value="Mian Chanu">Mian Chanu</MenuItem>
              <MenuItem value="Mirpur">Mirpur</MenuItem>
              <MenuItem value="Moro, Pakistan|Moro">Moro</MenuItem>
              <MenuItem value="Mardan">Mardan</MenuItem>
              <MenuItem value="Mach">Mach</MenuItem>
              <MenuItem value="Madyan">Madyan</MenuItem>
              <MenuItem value="Malakand">Malakand</MenuItem>
              <MenuItem value="Mand">Mand</MenuItem>
              <MenuItem value="Manguchar">Manguchar</MenuItem>
              <MenuItem value="Mashki Chah">Mashki Chah</MenuItem>
              <MenuItem value="Maslti">Maslti</MenuItem>
              <MenuItem value="Mastuj">Mastuj</MenuItem>
              <MenuItem value="Mastung">Mastung</MenuItem>
              <MenuItem value="Mathi">Mathi</MenuItem>
              <MenuItem value="Matiari">Matiari</MenuItem>
              <MenuItem value="Mehar">Mehar</MenuItem>
              <MenuItem value="Mekhtar">Mekhtar</MenuItem>
              <MenuItem value="Merui">Merui</MenuItem>
              <MenuItem value="Mianwali">Mianwali</MenuItem>
              <MenuItem value="Mianez">Mianez</MenuItem>
              <MenuItem value="Mirpur Batoro">Mirpur Batoro</MenuItem>
              <MenuItem value="Mirpur Khas">Mirpur Khas</MenuItem>
              <MenuItem value="Mirpur Sakro">Mirpur Sakro</MenuItem>
              <MenuItem value="Mithi">Mithi</MenuItem>
              <MenuItem value="Mongora">Mongora</MenuItem>
              <MenuItem value="Murgha Kibzai">Murgha Kibzai</MenuItem>
              <MenuItem value="Muridke">Muridke</MenuItem>
              <MenuItem value="Musa Khel Bazar">Musa Khel Bazar</MenuItem>
              <MenuItem value="Muzaffar Garh">Muzaffar Garh</MenuItem>
              <MenuItem value="Muzaffarabad">Muzaffarabad</MenuItem>
              <MenuItem value="Nawabshah">Nawabshah</MenuItem>
              <MenuItem value="Nazimabad">Nazimabad</MenuItem>
              <MenuItem value="Nowshera">Nowshera</MenuItem>
              <MenuItem value="Nagar Parkar">Nagar Parkar</MenuItem>
              <MenuItem value="Nagha Kalat">Nagha Kalat</MenuItem>
              <MenuItem value="Nal">Nal</MenuItem>
              <MenuItem value="Naokot">Naokot</MenuItem>
              <MenuItem value="Nasirabad">Nasirabad</MenuItem>
              <MenuItem value="Nauroz Kalat">Nauroz Kalat</MenuItem>
              <MenuItem value="Naushara">Naushara</MenuItem>
              <MenuItem value="Nur Gamma">Nur Gamma</MenuItem>
              <MenuItem value="Nushki">Nushki</MenuItem>
              <MenuItem value="Nuttal">Nuttal</MenuItem>
              <MenuItem value="Okara">Okara</MenuItem>
              <MenuItem value="Ormara">Ormara</MenuItem>
              <MenuItem value="Peshawar">Peshawar</MenuItem>
              <MenuItem value="Panjgur">Panjgur</MenuItem>
              <MenuItem value="Pasni City">Pasni City</MenuItem>
              <MenuItem value="Paharpur">Paharpur</MenuItem>
              <MenuItem value="Palantuk">Palantuk</MenuItem>
              <MenuItem value="Pendoo">Pendoo</MenuItem>
              <MenuItem value="Piharak">Piharak</MenuItem>
              <MenuItem value="Pirmahal">Pirmahal</MenuItem>
              <MenuItem value="Pishin">Pishin</MenuItem>
              <MenuItem value="Plandri">Plandri</MenuItem>
              <MenuItem value="Pokran">Pokran</MenuItem>
              <MenuItem value="Pounch">Pounch</MenuItem>
              <MenuItem value="Quetta">Quetta</MenuItem>
              <MenuItem value="Qambar">Qambar</MenuItem>
              <MenuItem value="Qamruddin Karez">Qamruddin Karez</MenuItem>
              <MenuItem value="Qazi Ahmad">Qazi Ahmad</MenuItem>
              <MenuItem value="Qila Abdullah">Qila Abdullah</MenuItem>
              <MenuItem value="Qila Ladgasht">Qila Ladgasht</MenuItem>
              <MenuItem value="Qila Safed">Qila Safed</MenuItem>
              <MenuItem value="Qila Saifullah">Qila Saifullah</MenuItem>
              <MenuItem value="Rawalpindi">Rawalpindi</MenuItem>
              <MenuItem value="Rabwah">Rabwah</MenuItem>
              <MenuItem value="Rahim Yar Khan">Rahim Yar Khan</MenuItem>
              <MenuItem value="Rajan Pur">Rajan Pur</MenuItem>
              <MenuItem value="Rakhni">Rakhni</MenuItem>
              <MenuItem value="Ranipur">Ranipur</MenuItem>
              <MenuItem value="Ratodero">Ratodero</MenuItem>
              <MenuItem value="Rawalakot">Rawalakot</MenuItem>
              <MenuItem value="Renala Khurd">Renala Khurd</MenuItem>
              <MenuItem value="Robat Thana">Robat Thana</MenuItem>
              <MenuItem value="Rodkhan">Rodkhan</MenuItem>
              <MenuItem value="Rohri">Rohri</MenuItem>
              <MenuItem value="Sialkot">Sialkot</MenuItem>
              <MenuItem value="Sadiqabad">Sadiqabad</MenuItem>
              <MenuItem value="Safdar Abad- (Dhaban Singh)">
                Safdar Abad
              </MenuItem>
              <MenuItem value="Sahiwal">Sahiwal</MenuItem>
              <MenuItem value="Saidu Sharif">Saidu Sharif</MenuItem>
              <MenuItem value="Saindak">Saindak</MenuItem>
              <MenuItem value="Sakrand">Sakrand</MenuItem>
              <MenuItem value="Sanjawi">Sanjawi</MenuItem>
              <MenuItem value="Sargodha">Sargodha</MenuItem>
              <MenuItem value="Saruna">Saruna</MenuItem>
              <MenuItem value="Shabaz Kalat">Shabaz Kalat</MenuItem>
              <MenuItem value="Shadadkhot">Shadadkhot</MenuItem>
              <MenuItem value="Shahbandar">Shahbandar</MenuItem>
              <MenuItem value="Shahpur">Shahpur</MenuItem>
              <MenuItem value="Shahpur Chakar">Shahpur Chakar</MenuItem>
              <MenuItem value="Shakargarh">Shakargarh</MenuItem>
              <MenuItem value="Shangla">Shangla</MenuItem>
              <MenuItem value="Sharam Jogizai">Sharam Jogizai</MenuItem>
              <MenuItem value="Sheikhupura">Sheikhupura</MenuItem>
              <MenuItem value="Shikarpur">Shikarpur</MenuItem>
              <MenuItem value="Shingar">Shingar</MenuItem>
              <MenuItem value="Shorap">Shorap</MenuItem>
              <MenuItem value="Sibi">Sibi</MenuItem>
              <MenuItem value="Sohawa">Sohawa</MenuItem>
              <MenuItem value="Sonmiani">Sonmiani</MenuItem>
              <MenuItem value="Sooianwala">Sooianwala</MenuItem>
              <MenuItem value="Spezand">Spezand</MenuItem>
              <MenuItem value="Spintangi">Spintangi</MenuItem>
              <MenuItem value="Sui">Sui</MenuItem>
              <MenuItem value="Sujawal">Sujawal</MenuItem>
              <MenuItem value="Sukkur">Sukkur</MenuItem>
              <MenuItem value="Suntsar">Suntsar</MenuItem>
              <MenuItem value="Surab">Surab</MenuItem>
              <MenuItem value="Swabi">Swabi</MenuItem>
              <MenuItem value="Swat">Swat</MenuItem>
              <MenuItem value="Tando Adam">Tando Adam</MenuItem>
              <MenuItem value="Tando Bago">Tando Bago</MenuItem>
              <MenuItem value="Tangi">Tangi</MenuItem>
              <MenuItem value="Tank City">Tank City</MenuItem>
              <MenuItem value="Tar Ahamd Rind">Tar Ahamd Rind</MenuItem>
              <MenuItem value="Thalo">Thalo</MenuItem>
              <MenuItem value="Thatta">Thatta</MenuItem>
              <MenuItem value="Toba Tek Singh">Toba Tek Singh</MenuItem>
              <MenuItem value="Tordher">Tordher</MenuItem>
              <MenuItem value="Tujal">Tujal</MenuItem>
              <MenuItem value="Tump">Tump</MenuItem>
              <MenuItem value="Turbat">Turbat</MenuItem>
              <MenuItem value="Umarao">Umarao</MenuItem>
              <MenuItem value="Umarkot">Umarkot</MenuItem>
              <MenuItem value="Upper Dir">Upper Dir</MenuItem>
              <MenuItem value="Uthal">Uthal</MenuItem>
              <MenuItem value="Vehari">Vehari</MenuItem>
              <MenuItem value="Veirwaro">Veirwaro</MenuItem>
              <MenuItem value="Vitakri">Vitakri</MenuItem>
              <MenuItem value="Wadh">Wadh</MenuItem>
              <MenuItem value="Wah Cantt">Wah Cantt</MenuItem>
              <MenuItem value="Warah">Warah</MenuItem>
              <MenuItem value="Washap">Washap</MenuItem>
              <MenuItem value="Wasjuk">Wasjuk</MenuItem>
              <MenuItem value="Wazirabad">Wazirabad</MenuItem>
              <MenuItem value="Yakmach">Yakmach</MenuItem>
              <MenuItem value="Zhob">Zhob</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </ThemeProvider>
  );
}
