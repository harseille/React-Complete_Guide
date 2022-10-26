import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return (
    <>
      <MeetupDetail
        image={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/%EA%B4%91%ED%99%94%EB%AC%B8_Gwanghwamun_%E5%85%89%E5%8C%96%E9%96%80_-_panoramio.jpg/275px-%EA%B4%91%ED%99%94%EB%AC%B8_Gwanghwamun_%E5%85%89%E5%8C%96%E9%96%80_-_panoramio.jpg'
        }
        title={'test'}
        address={'test'}
        description={'test'}
      />
    </>
  );
};

export default MeetupDetails;
