import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class Book extends Component {
    constructor(props) {
        super(props);
    }

    //Submit book handler
    submitBook(input){
        this.props.createBook(input);
    }

    render(){
        let titleInput;
        return(
            <div>
                <h3>Books</h3>
                <ul>
                    {/*Traverse books array*/}
                    {this.props.books.map((b, i) => <li key={i}>{b.title}</li> )}
                </ul>
                <div>
                    <h3>Books Form</h3>
                    <form onSubmit={e => {
                        
                        //preventRequest
                        e.preventDefault();
                        
                        //Assemble Inputs
                        var input = {title: titleInput.value};
                        
                        //call handler
                        this.submitBook(input);
                        //Reset form
                        e.target.reset();    
                        }}>
                        <input type="text" name="title" ref={node => titleInput = node} />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        );
    }
}
//pass the state to our components' props
const mapStateToProps = (state, ownProps) => ({ 
    //now can do this.props.books
    books: state.books
 });

 //pass the actions to our components props
 const mapDispatchToProps = (dispatch) => ({
     //can now say this.props.createBook
         createBook: book => dispatch(bookActions.createBook(book));
 });

 //use connect to put them together


export default connect(mapStateToProps, mapDispatchToProps)(Book);