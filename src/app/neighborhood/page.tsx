export default function NeighberhoodPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Get to Know Your Neighborhood
                    </h1>
                    <p className="text-lg text-gray-600">
                        Discover local amenities, services, and points of interest around you
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-3">Local Restaurants</h3>
                        <p className="text-gray-600 mb-4">Find nearby dining options and cafes</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Explore Dining
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-3">Shopping Centers</h3>
                        <p className="text-gray-600 mb-4">Discover local shops and markets</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Find Shops
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-3">Parks & Recreation</h3>
                        <p className="text-gray-600 mb-4">Explore outdoor spaces and activities</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            View Parks
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
                        <p className="text-gray-600 mb-4">Locate hospitals, clinics, and pharmacies</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Find Healthcare
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-3">Transportation</h3>
                        <p className="text-gray-600 mb-4">Public transit and transportation options</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            View Transit
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-3">Schools</h3>
                        <p className="text-gray-600 mb-4">Educational institutions in your area</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Find Schools
                        </button>
                    </div>
                </div>

                <div className="mt-12 bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold mb-4">Neighborhood Map</h2>
                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Interactive map will be displayed here</p>
                    </div>
                </div>
            </div>
        </div>
    );
}