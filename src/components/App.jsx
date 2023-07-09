import React, { useState } from 'react';
import { Section } from './section/section';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Notification } from './notification/notification';
import { Statistics } from './statistics/statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    if (option === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (option === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (option === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  const totalFeedback = good + neutral + bad;

  const positivePercentage = Math.round((good / totalFeedback) * 100) || 0;

  const options = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please leave Feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      {totalFeedback > 0 ? (
        <Statistics
          feedback={{ good, neutral, bad }}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};


