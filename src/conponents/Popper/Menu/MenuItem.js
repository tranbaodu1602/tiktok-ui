import Button from '~/conponents/Button/Button';

function MenuItem({ data, onClick }) {
  return (
    <div>
      <Button LeftIcon={data.icon} to={data.to} onClick={onClick}>
        {data.title}
      </Button>
    </div>
  );
}

export default MenuItem;
