const Changelog = ({ changelogData }) => (
  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg leading-6 text-gray-900">
        Changelog
      </h3>
    </div>
    <div className="border-t border-gray-200">
      <dl>
        {changelogData.map((entry, index) => (
          <div className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`} key={entry.version}>
            <dt className="text-sm font-medium text-gray-500">
              Version {entry.version}
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="list-disc list-inside">
                {entry.changes.map((change, i) => (
                  <li key={i}>{change}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
);
export default Changelog;