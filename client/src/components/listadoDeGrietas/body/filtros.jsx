import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import styles from './style.css'

const filtros = ({
    filters,
    handleChange
})=>(
    <div className='divFiltros'>
    <form  autoComplete="off">
    <FormControl style={{marginRight:'15px'}}>
    <InputLabel htmlFor="Gravedad">Gravedad</InputLabel>
    <Select
        value={filters.gravedad}

        onChange={(e)=>handleChange(e,'gravedad')}
        input={<Input id="Gravedad" />
        }
    >
        <MenuItem value="">
        <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Baja</MenuItem>
        <MenuItem value={20}>Media</MenuItem>
        <MenuItem value={30}>Alta</MenuItem>
    </Select>
    <FormHelperText>Baja, Media y Alta</FormHelperText>
    </FormControl>
    <FormControl style={{marginRight:'15px'}}>
    <InputLabel htmlFor="age-helper">Tipo</InputLabel>
    <Select
        value={'18'}
        input={<Input id="age-helper" />}
    >
        <MenuItem value="Ambas">
        <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Interna</MenuItem>
        <MenuItem value={20}>Externa</MenuItem>
        <MenuItem value={30}>Ambas</MenuItem>
    </Select>
    </FormControl>
    <FormControl style={{marginRight:'15px'}}>
    <InputLabel htmlFor="name-error">Hogar</InputLabel>
    <Select
        value={'18'}
        input={<Input id="name-error" />}
    >
        <MenuItem value="">
        <em>None</em>
        </MenuItem>
        <MenuItem value="hai">Edificio</MenuItem>
        <MenuItem value="olivier">Terreno</MenuItem>
        <MenuItem value="kevin">Casa</MenuItem>
    </Select>
    <FormHelperText>Tipo De Vivienda</FormHelperText>
    </FormControl>
    <FormControl style={{marginRight:'15px'}}>
    <InputLabel htmlFor="name-input">Busqueda</InputLabel>
    <Input id="name-input" />
    <FormHelperText>Domicilio</FormHelperText>
    </FormControl>
    <FormControl style={{marginRight:'15px'}}>
    <InputLabel htmlFor="name-readonly">Tamaño</InputLabel>
    <Select
        value={'18'}
        input={<Input id="name-readonly" />}
    >
        <MenuItem value="">
        <em>None</em>
        </MenuItem>
        <MenuItem value="hai">Chica</MenuItem>
        <MenuItem value="olivier">Media</MenuItem>
        <MenuItem value="kevin">Grande</MenuItem>
    </Select>
    <FormHelperText>Read only</FormHelperText>
    </FormControl>
</form>
</div>
)


export default filtros;