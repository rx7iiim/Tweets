export default function StatsSection() {
  return (
    <div className="relative py-12 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-sm text-purple-200 mt-2">
              Customer Satisfaction
            </div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-sm text-purple-200 mt-2">
              Support Availability
            </div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">
            <div className="text-3xl font-bold text-white">5,000+</div>
            <div className="text-sm text-purple-200 mt-2">Active Users</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">
            <div className="text-3xl font-bold text-white">99.9%</div>
            <div className="text-sm text-purple-200 mt-2">Uptime Guarantee</div>
          </div>
        </div>
      </div>
    </div>
  );
}
