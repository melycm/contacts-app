import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            value: [],
            name: ''
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        console.log('form submitted ' + this.state.value);
        e.preventDefault();
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    render() {
        const { classes } = this.props;

        return (
        <div className={classes.container}>
        <form onSubmit={this.handleSubmit}>
            <FormControl className={classes.formControl}>
            {/* <input type="text" name="nameofPerson" value={this.state.nameOfPerson} onChange={this.handleChange} /> */}
                <InputLabel htmlFor="name-simple">Name</InputLabel>
                <Input id="name-simple" onChange={this.handleChange} ref="namePerson" value={this.state.namePerson} />
            </FormControl>
            <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                <InputLabel htmlFor="name-helper">Email</InputLabel>
                <Input id="name-helper" onChange={this.handleChange} ref="email" value={this.state.email}/>
            </FormControl>
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="name-simple">Phone Number</InputLabel>
                <Input id="name-simple" onChange={this.handleChange} ref="phone" value={this.state.phone}/>
            </FormControl>
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="name-simple">Adress</InputLabel>
                <Input id="name-simple" onChange={this.handleChange} ref="adress" value={this.state.adress}/>
            </FormControl>
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="name-simple">City</InputLabel>
                <Input id="name-simple" onChange={this.handleChange} ref="city" value={this.state.city}/>
            </FormControl>
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="name-simple">State</InputLabel>
                <Input id="name-simple" onChange={this.handleChange} ref="state" value={this.state.state}/>
            </FormControl>
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="name-simple">Zip Code</InputLabel>
                <Input id="name-simple" onChange={this.handleChange} ref="zipcode" value={this.state.zipcode}/>
            </FormControl>
            <br />
            <Button type="submit" value="submit" variant="contained" className={classes.button} style={{marginTop: '20px'}}>
                Submit
            </Button>
        </form>
        </div>
        );
    }
}

// Form.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Form);

// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state  = {
//             value: '',
//             name: '',
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleSubmit(e){
//         alert('form submitted' + this.state.value);
//         e.preventDefault();
//     }

//     handleChange(e){
//         this.setState({value: e.target.value});
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
                
//                 Name: <input type="text" name="nameofPerson" value={this.state.nameOfPerson} onChange={this.handleChange} />
//                 <br />
//                 E-mail: <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
//                 <br />
//                 Phone Number: <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
//                 <br />
//                 Adress: <input type="text" name="adress" value={this.state.adress} onChange={this.handleChange} />
//                 <br />
//                 City: <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
//                 <br />
//                 State: <input type="text" name="state" value={this.state.state} onChange={this.handleChange} />
//                 <br />
//                 Zip Code: <input type="text" name="zipcode" value={this.state.zipcode} onChange={this.handleChange} />
//                 <br />
//                 <input type="submit"/>
//             </form>
                


//         );
//     }
// }


// Form.propTypes = {
    
// };

// export default Form
