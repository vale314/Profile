import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import styles from './style.css'
import Button from 'material-ui/Button';


const filtros = ({
    filters,
    handleChange,
    busqueda
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
        <MenuItem value='Baja'>Baja</MenuItem>
        <MenuItem value='Media'>Media</MenuItem>
        <MenuItem value='Alta'>Alta</MenuItem>
    </Select>
    <FormHelperText>Baja, Media y Alta</FormHelperText>
    </FormControl>
    <FormControl style={{marginRight:'15px'}}>
    <InputLabel htmlFor="age-helper">Tipo</InputLabel>
    <Select
        value={filters.tipoGrieta}

        onChange={(e)=>handleChange(e,'tipoGrieta')}
        input={<Input id="age-helper" />}
    >
        <MenuItem value="">
        <em>None</em>
        </MenuItem>
        <MenuItem value='Interna'>Interna</MenuItem>
        <MenuItem value='Externa'>Externa</MenuItem>
        <MenuItem value='Ambas'>Ambas</MenuItem>
    </Select>
    </FormControl>
    <FormControl style={{marginRight:'15px'}}>
    <InputLabel htmlFor="name-error">Hogar</InputLabel>
    <Select
        value={filters.tipoHogar}

        onChange={(e)=>handleChange(e,'tipoHogar')}
        input={<Input id="name-error" />}
    >
        <MenuItem value="">
        <em>None</em>
        </MenuItem>
        <MenuItem value="Edificio">Edificio</MenuItem>
        <MenuItem value="Terreno">Terreno</MenuItem>
        <MenuItem value="Casa">Casa</MenuItem>
    </Select>
    <FormHelperText>Tipo De Vivienda</FormHelperText>
    </FormControl>
    <FormControl style={{marginRight:'15px'}}>
    <InputLabel htmlFor="name-input">Busqueda</InputLabel>
    <Input id="name-input" value={filters.domicilio} onChange={(e)=>handleChange(e,'domicilio')} />
    <FormHelperText>Domicilio</FormHelperText>
    </FormControl>
    <FormControl style={{marginRight:'15px'}}>
    <InputLabel htmlFor="name-readonly">Tamaño</InputLabel>
    <Select
        value={filters.tamaño}
        onChange={(e)=>handleChange(e,'tamaño')}
        input={<Input id="age-helper" />}
    >
        <MenuItem value="">
        <em>None</em>
        </MenuItem>
        <MenuItem value="Chica">Chica</MenuItem>
        <MenuItem value="Media">Media</MenuItem>
        <MenuItem value="Grande">Grande</MenuItem>
    </Select>
    <FormHelperText>Read only</FormHelperText>
    </FormControl>
    <Button raised color="accent" onClick={()=>busqueda(true)} >
        Accent
    </Button>
    <Button raised color="accent" onClick={()=>busqueda(false)} >
        Limpiar
    </Button>    
</form>
</div>
)


export default filtros;