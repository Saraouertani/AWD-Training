package esprit.gateway;

import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.loadbalancer.core.RandomLoadBalancer;
import org.springframework.cloud.loadbalancer.core.ReactorLoadBalancer;
import org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;
import org.springframework.cloud.loadbalancer.support.LoadBalancerClientFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;

public class RandomLoadBalancerConfig {

//    @Bean
//    ReactorLoadBalancer<ServiceInstance> randomLoadBalancer(Environment environment,
//                                                            LoadBalancerClientFactory factory) {
//        String name = environment.getProperty(LoadBalancerClientFactory.PROPERTY_NAME);
//        return new RandomLoadBalancer(
//                factory.getLazyProvider(name, ServiceInstanceListSupplier.class), name);
//    }
}
