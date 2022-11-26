// import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box/Box';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    this.setState(prevContact => ({
      contacts: [contact, ...prevContact.contacts],
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <Box p="20px" lineHeight="1" display="flex" flexDirection="column">
          <Section title="Phonebook">
            <ContactForm onSubmit={this.formSubmitHandler} />
          </Section>
          {this.state.contacts.length !== 0 && (
            <Section title="Contacts">
              <ContactsList contacts={this.state.contacts} />
            </Section>
          )}

          {/* <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Section title="Statistics">
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          )} */}
        </Box>
      </div>
    );
  }
}


// App.propTypes = {
//   title: PropTypes.string,
//   message: PropTypes.string,
//   options: PropTypes.arrayOf(PropTypes.number),
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };