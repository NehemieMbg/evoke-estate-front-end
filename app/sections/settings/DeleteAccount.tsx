const DeleteAccount = () => {
  return (
    <div>
      <h2 className="text-lg text-red-500 mb-6">Unhappy?</h2>

      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-x-10 gap-y-6">
        <p className="font-light text-xmd">
          We’ll be sad to see you leave, but if you want to permanently delete
          your account and all its data, here’s the place.
        </p>

        <div className="text-xmd">
          <span className="font-light">Want to delete you account?</span>{' '}
          <button className="font-medium">Delete Account</button>
        </div>
      </div>
    </div>
  );
};
export default DeleteAccount;
