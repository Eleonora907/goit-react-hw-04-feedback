import React, { useState } from 'react';
import { Section } from './section/section';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Notification } from './notification/notification';
import { Statistics } from './statistics/statistics';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const totalFeedback = countTotalFeedback();
    return Math.round((good / totalFeedback) * 100) || 0;
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  const options = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please leave Feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      {totalFeedback > 0 ? (
        <Statistics
          feedback={feedback}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
