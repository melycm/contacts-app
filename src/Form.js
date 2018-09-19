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
            allContacts: [],
            contact: {
                namePerson: "myName",
                phone: "12049201421",
                email: "@gmail.com",
                adress: "ajgkeal;gea",
                city: "Houston",
                state: "TX",
                zipcode: "1421421"
            },
            name: '',
            phone: '',
            email: '',
            adress: '',
            city: '',
            state: '',
            zipcode: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        this.setState({
            newcontact: {
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                adress: this.state.adress,
                city: this.state.city,
                state: this.state.state,
                zipcode: this.state.zipcode,
            }
        }, function(){
            console.log('form submitted ' + this.state.newcontact.name, this.state.newcontact.phone,
            this.state.newcontact.phone,
            this.state.newcontact.email,
            this.state.newcontact.adress,
            this.state.newcontact.city );

            let tempContacts = this.state.allContacts;
            tempContacts.push(this.state.newcontact);

            this.setState({allContacts: tempContacts});
        })
        
        
    }

    handleChange(e){

        this.setState({value: e.target.value});
    }

    render() {

        let constactList = this.state.allContacts.map(contact =>{

            return <li key={contact.name}>{contact.name}</li>
        })
        const { classes } = this.props;

        return (
        <div className={classes.container}>
    
        <form onSubmit={this.handleSubmit}>
            <FormControl className={classes.formControl}>
            {/* <input type="text" name="nameofPerson" value={this.state.nameOfPerson} onChange={this.handleChange} /> */}
                <InputLabel htmlFor="name-simple">Name</InputLabel>
                <Input id="name-simple" name="namePerson" onChange={e => this.setState({name: e.target.value} )} />
            </FormControl>
            <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                <InputLabel htmlFor="name-helper">Email</InputLabel>
                <Input id="name-helper" onChange={this.handleChange} />
            </FormControl>
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="name-simple">Phone Number</InputLabel>
                <Input id="name-simple" onChange={this.handleChange} />
            </FormControl>
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="name-simple">Adress</InputLabel>
                <Input id="name-simple" onChange={this.handleChange} />
            </FormControl>
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="name-simple">City</InputLabel>
                <Input id="name-simple" onChange={this.handleChange} />
            </FormControl>
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="name-simple">State</InputLabel>
                <Input id="name-simple" onChange={this.handleChange} />
            </FormControl>
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="name-simple">Zip Code</InputLabel>
                <Input id="name-simple" onChange={this.handleChange} />
            </FormControl>
            <br />
            <Button type="submit" value="submit" variant="contained" onClick={this.handleSubmit.bind(this)} className={classes.button} style={{marginTop: '20px'}}>
                Submit
            </Button>
        </form>

            {constactList}
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
