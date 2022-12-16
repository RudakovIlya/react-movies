import React, {useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import RadioGroup from '@mui/material/RadioGroup';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import SearchIcon from '@mui/icons-material/Search';

const Search = props => {

    const {
        searchMovies
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const onChangeInputValue = event => {
        setSearch(event.currentTarget.value);
    };

    const handleFilter = event => {
        setType(event.target.value);
        searchMovies(search, event.target.value);
    };

    const handleCallback = () => {
        searchMovies(search, type);
    };

    const handleKey = event => {
        if (event.key === "Enter") {
            handleCallback();
        }
    };

    return (
        <div>
            <Box sx={{mb: 3}}>
                <FormControl sx={{width: '100%'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        value={search}
                        onChange={onChangeInputValue}
                        onKeyDown={handleKey}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    onClick={handleCallback}
                                    color="inherit"
                                >
                                    <SearchIcon/>
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </Box>
            <RadioGroup
                sx={{mb: 3,}}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel onChange={handleFilter} checked={type === "all"} value={"all"}
                                  control={<Radio color="default"/>} label="All"/>

                <FormControlLabel onChange={handleFilter} checked={type === "movie"} value={"movie"}
                                  control={<Radio color="default"/>} label="Movies"/>

                <FormControlLabel onChange={handleFilter} checked={type === "series"} value={"series"}
                                  control={<Radio color="default"/>} label="Series"/>
            </RadioGroup>
        </div>
    );
};

export default Search;
